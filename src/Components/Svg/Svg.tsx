import React from 'react';

export interface Props extends React.SVGProps<SVGSVGElement> {}

const Svg: React.FC<Props> = (props: Props) => <svg {...props} />;

export default Svg;
