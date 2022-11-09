import { Formkl, SchemaBase, SchemaFlat, Section } from "@formkl/shared";

export interface HandlerHook {
  /**
   * Decide whether to proceed the change
   */
  onBeforeModelChange?: (options: {
    model: SchemaBase | SchemaFlat;
  }) => Promise<SchemaBase | SchemaFlat>;
  /**
   * Decide whether to proceed the change
   */
  onBeforeSectionChange?: (options: {
    section: Section;
    sectionIndex: number;
    model: SchemaBase | SchemaFlat;
  }) => Promise<{
    section: Section;
    sectionIndex: number;
    model: SchemaBase | SchemaFlat;
  }>;
  /**
   * Decide whether to proceed the change
   */
  onBeforeFieldChange?: (options: {
    section: Section;
    sectionIndex: number;
    field: Section;
    fieldIndex: number;
    responseIndex: number;
    value: any;
  }) => Promise<{
    section: Section;
    sectionIndex: number;
    field: Section;
    fieldIndex: number;
    responseIndex: number;
    value: any;
  }>;
  /**
   * Decide whether to proceed the submission
   */
  onBeforeSubmit?: (options: {
    model: SchemaBase | SchemaFlat;
  }) => Promise<SchemaBase | SchemaFlat>;
  onParse?: (formkl?: Formkl) => Promise<void>;
  /**
   * Event hooks for extra logic handling
   */
  onModelChange?: (options: { model: SchemaBase | SchemaFlat }) => Promise<void>;
  /**
   * Event hooks for extra logic handling
   */
  onSectionChange?: (options: {
    section: Section;
    sectionIndex: number;
    field: Section;
    fieldIndex: number;
    responseIndex?: number;
    model: SchemaBase | SchemaFlat;
  }) => Promise<void>;
  /**
   * Event hooks for extra logic handling
   */
  onFieldChange?: (options: {
    section: Section;
    sectionIndex: number;
    field: Section;
    fieldIndex: number;
    responseIndex?: number;
    value: any;
  }) => Promise<void>;
  /**
   * Event hooks for extra logic handling
   */
  onSubmit?: (options: { model: SchemaBase | SchemaFlat }) => Promise<void>;
}
