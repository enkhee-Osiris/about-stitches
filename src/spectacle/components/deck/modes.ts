import { SPECTACLE_MODES, SpectacleMode } from "../../utils/constants";

type ModeSearchParams = {
  presenterMode?: boolean;
  overviewMode?: boolean;
  printMode?: boolean;
  exportMode?: boolean;
};

export function modeSearchParamForKey(key: SpectacleMode): ModeSearchParams {
  if (key === SPECTACLE_MODES.PRESENTER_MODE) {
    return { presenterMode: true };
  }
  if (key === SPECTACLE_MODES.OVERVIEW_MODE) {
    return { overviewMode: true };
  }
  if (key === SPECTACLE_MODES.PRINT_MODE) {
    return { printMode: true };
  }
  if (key === SPECTACLE_MODES.EXPORT_MODE) {
    return { exportMode: true };
  }
  return {};
}

export function modeKeyForSearchParam({
  presenterMode,
  overviewMode,
  printMode,
  exportMode,
}: ModeSearchParams) {
  if (presenterMode) {
    return SPECTACLE_MODES.PRESENTER_MODE;
  }
  if (overviewMode) {
    return SPECTACLE_MODES.OVERVIEW_MODE;
  }
  if (printMode) {
    return SPECTACLE_MODES.PRINT_MODE;
  }
  if (exportMode) {
    return SPECTACLE_MODES.EXPORT_MODE;
  }
  return SPECTACLE_MODES.DEFAULT_MODE;
}
