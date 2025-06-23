import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";
import { meetingPrepWorkflow } from "./workflows/meeting-prep-workflow";
import { meetingPrepAgent } from "./agents";

export const mastra = new Mastra({
  workflows: { meetingPrepWorkflow },
  agents: { meetingPrepAgent },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
