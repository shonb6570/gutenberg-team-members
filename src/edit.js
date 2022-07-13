import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import "./editor.scss";

const ALLOWED_BLOCKS = ["evbg/team-member"];

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;

	const onChangeColumns = (newColumns) => {
		setAttributes({ columns: newColumns });
	};

	return (
		<div {...useBlockProps({ className: `has-${columns}-columns` })}>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__("Columns", "team-members")}
						min={1}
						max={3}
						onChange={onChangeColumns}
						value={columns}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				orientation="horizontal"
				template={[
					["evbg/team-member"],
					["evbg/team-member"],
					["evbg/team-member"],
				]}
				// templateLock="all"
			/>
		</div>
	);
}
