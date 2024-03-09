import { TableColumnsType } from "antd";
import { AddressResponse, HospitalResponse } from "../models";
import { Link } from "react-router-dom";

const columns: TableColumnsType<HospitalResponse> = [
  {
    title: "Hospital Name",
    dataIndex: "name",
  },
  {
    title: "State",
    dataIndex: "addresses",
    render: (addresses) =>
      addresses?.map((address: AddressResponse) => address.state).join(", "),
  },
  {
    title: "Specialization",
    dataIndex: "specialization",
  },
  {
    title: "Address",
    dataIndex: "addresses",
    render: (addresses) =>
      addresses
        ?.map((address: AddressResponse) => address.addressLine)
        .join(", "),
  },
  {
    title: "Action",
    dataIndex: "id",
    key: "x",
    render: (id) => (
      <Link title="Details" to={`${id}`} className="button">
        Details
      </Link>
    ),
  },
];

export { columns };
