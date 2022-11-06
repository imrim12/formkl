import { Section } from "@formkl/shared";
import { FieldEvent } from "./field-event.type";

export type SectionEvent = { section: Section; sectionIndex: number } & FieldEvent;
