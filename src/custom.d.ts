declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGElement>
  >;
  const src: string;
  export default src;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
