import { Link } from "react-router-dom";
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Check the <Link target="_blank" to="https://4geeks.com/docs/start/start-react-advanced-project">template documentation</Link> <i className="fa-solid fa-file"></i> for help.
		</p>
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<Link to="http://www.4geeksacademy.com">4Geeks Academy</Link>
		</p>
	</footer>
);