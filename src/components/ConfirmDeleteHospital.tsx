import { FC } from "react";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

interface Props {
	open: boolean;
	onConfirm: () => void;
	hideModal: () => void;
}
export const ConfirmDeleteHospital: FC<Props> = ({ open, onConfirm, hideModal }) => {
	return (
		<Popconfirm
			title="Delete Hospital"
			description="Are you show you want to delete this hospital"
			open={open}
			onConfirm={onConfirm}
			onCancel={hideModal}
			okText="Delete"
			cancelText="No"
			icon={<QuestionCircleOutlined style={{ color: "red" }} />}
			placement="bottomLeft"
		></Popconfirm>
	);
};
