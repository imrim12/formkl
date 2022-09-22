import { Adapter } from "./core/Adapter";
import { PluginText } from "./plugins/Text";
import { PluginParagraph } from "./plugins/Paragraph";
import { PluginCheckbox } from "./plugins/Checkbox";
import { PluginDate } from "./plugins/Date";
import { PluginDateRange } from "./plugins/DateRange";
import { PluginDatetime } from "./plugins/Datetime";
import { PluginDatetimeRange } from "./plugins/DatetimeRange";
import { PluginNumber } from "./plugins/Number";
import { PluginRadio } from "./plugins/Radio";
import { PluginSelect } from "./plugins/Select";
import { PluginSwitch } from "./plugins/Switch";
import { PluginTime } from "./plugins/Time";
import { PluginTimeRange } from "./plugins/TimeRange";

export function bootstrap() {
  Adapter.registerPlugin(
    PluginCheckbox,
    PluginDate,
    PluginDateRange,
    PluginDatetime,
    PluginDatetimeRange,
    PluginNumber,
    PluginParagraph,
    PluginRadio,
    PluginSelect,
    PluginSwitch,
    PluginText,
    PluginTime,
    PluginTimeRange,
  );
}
