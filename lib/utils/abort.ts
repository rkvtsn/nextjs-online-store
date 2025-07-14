export function isCancelError(error: unknown): boolean {
  if (error instanceof DOMException && error.name === ErrorCancelName.ERROR)
    return true;

  if (typeof error === "object" && error !== null) {
    return (
      (error as { name?: string }).name === ErrorCancelName.FETCH ||
      (error as { code?: string }).code === ErrorCancelName.AXIOS ||
      (error as { [ErrorCancelName.AXIOS_LEGACY]?: boolean })[
        ErrorCancelName.AXIOS_LEGACY
      ] === true
    );
  }

  return false;
}

enum ErrorCancelName {
  FETCH = "CanceledError",
  AXIOS = "ERR_CANCELED",
  AXIOS_LEGACY = "__CANCEL__",
  ERROR = "AbortError",
}
