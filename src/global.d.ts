declare module '*.png' {
    // @ts-ignore
    export default '' as string;
}
declare module '*.jpg' {
    // @ts-ignore
    export default '' as string;
}
declare module '*.svg' {
    // @ts-ignore
    export default '' as string;
}
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}