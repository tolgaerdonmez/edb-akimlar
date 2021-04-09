import { Link } from "react-router-dom";
import "../styles/components/ButtonBase.scss";
import "../styles/components/Buttons.scss";

interface IProps {
	to?: string;
}

type Props = React.FC<React.HTMLProps<HTMLButtonElement> & IProps>;

export const Button: Props = ({ children, disabled, to, ...props }) => {
	const { className, ...rest } = props;

	const Comp = to ? Link : ({ children, to, ...props }: any) => <button {...props}>{children}</button>;
	return (
		// @ts-ignore
		<Comp to={to} disabled={disabled} className={`${className} buttonBase`} {...rest}>
			{children}
		</Comp>
	);
};
