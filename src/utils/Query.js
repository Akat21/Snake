export const params = (new URL(document.location)).searchParams;
export const nickname = params.get("user");
export const user_id = params.get("id");
export const diff = params.get("df");