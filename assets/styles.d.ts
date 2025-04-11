type CSSModuleClasses = { readonly [key: string]: string };

declare module "*.css?module" {
    const styles: CSSModuleClasses;
    export = styles;
}

declare module "*.scss?module" {
    const styles: CSSModuleClasses;
    export = styles;
}
