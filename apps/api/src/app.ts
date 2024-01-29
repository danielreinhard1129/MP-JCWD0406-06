import cors from "cors";
import express, {
  Express,
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
  static as static_,
} from "express";
import { PORT } from "./config";
import { SampleRouter } from "./routers/sample.router";
import { EventRouter } from "./routers/event.router";
import { join } from "path";
import { UserRouter } from "./routers/user.router";
import { ReviewRouter } from "./routers/review.router";

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use("/", static_(join(__dirname, "../public")));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes("/api/")) {
        res.status(404).send("Not found !");
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes("/api/")) {
          console.error("Error : ", err.stack);
          res.status(500).send(err.message);
        } else {
          next();
        }
      }
    );
  }

  private routes(): void {
    const sampleRouter = new SampleRouter();
    const eventRouter = new EventRouter();
    const userRouter = new UserRouter();
    const reviewRouter = new ReviewRouter();

    this.app.get("/api", (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student !`);
    });

    this.app.use("/api/samples", sampleRouter.getRouter());

    // router event handlers
    this.app.use("/api", eventRouter.router);
    this.app.use("/api", reviewRouter.router);

    this.app.use("/api/users", userRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
