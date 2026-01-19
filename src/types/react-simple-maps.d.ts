declare module 'react-simple-maps' {
    import { ComponentType, ReactNode } from 'react';

    interface ComposableMapProps {
        projection?: string;
        projectionConfig?: {
            scale?: number;
            center?: [number, number];
            rotate?: [number, number, number];
        };
        className?: string;
        children?: ReactNode;
    }

    interface ZoomableGroupProps {
        center?: [number, number];
        zoom?: number;
        children?: ReactNode;
    }

    interface GeographiesProps {
        geography: string | object;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        children: (props: { geographies: any[] }) => ReactNode;
    }

    interface GeographyProps {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        geography: any;
        className?: string;
        style?: {
            default?: React.CSSProperties;
            hover?: React.CSSProperties;
            pressed?: React.CSSProperties;
        };
        onMouseEnter?: (event: React.MouseEvent<SVGPathElement>) => void;
        onMouseLeave?: (event: React.MouseEvent<SVGPathElement>) => void;
        onMouseMove?: (event: React.MouseEvent<SVGPathElement>) => void;
        onClick?: (event: React.MouseEvent<SVGPathElement>) => void;
    }

    export const ComposableMap: ComponentType<ComposableMapProps>;
    export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
    export const Geographies: ComponentType<GeographiesProps>;
    export const Geography: ComponentType<GeographyProps>;
}
