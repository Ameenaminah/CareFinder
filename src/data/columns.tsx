import { TableColumnsType } from "antd";
import { AddressResponse, HospitalResponse } from "../models";

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
];

export { columns };
