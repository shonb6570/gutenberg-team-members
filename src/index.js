import { registerBlockType } from "@wordpress/blocks";
import "./team-member";
import "./style.scss";
import Edit from "./edit";
import Save from "./save";

registerBlockType("evbg/team-members", {
	edit: Edit,
	save: Save,
});
