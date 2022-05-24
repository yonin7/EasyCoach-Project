import { Table, Typography } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import useWindowDimensions from './hooks/useWindowDimensions';

const { Text } = Typography;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  width: 90%;

  @media screen and (max-width: 764px) {
    font-size: 0.2rem;
  }
`;

// const { Column, ColumnGroup } = Table;

const TableTemplate = () => {
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);

  const columns = [
    {
      title: "Athlete",
      dataIndex: "Athlete",
      key: "Athlete",
      fixed: "left",
      width: 100,

      sorter: (a, b) => a.Athlete - b.Athlete,
    },
    { title: "Started", dataIndex: "Started", key: "Started", width: 80 },
    {
      title: "Min",
      dataIndex: "Min",
      key: "Min",
      width: 80,
      sorter: (a, b) => a.Started - b.Started,
    },
    {
      title: "Touches",
      key: "Touches",
      children: [
        {
          title: "T",
          dataIndex: "T",
          key: "T1",
          width: 50,
          sorter: (a, b) => a.T - b.T,
        },
        {
          title: "T Att 3rd",
          dataIndex: "T Att 3rd",
          key: "T_Att_3rd",
          width: 90,
          sorter: (a, b) => a["T Att 3rd"] - b["T Att 3rd"],
        },
        {
          title: "FA",
          dataIndex: "FA",
          key: "FA",
          width: 50,
          sorter: (a, b) => a.FA - b.FA,
        },
        {
          title: "SH",
          dataIndex: "SH",
          key: "SH",
          width: 60,
          sorter: (a, b) => a.SH - b.SH,
        },
        {
          title: "TO",
          dataIndex: "TO",
          key: "TO",
          width: 60,
          sorter: (a, b) => a.TO - b.TO,
        },
        {
          title: "CK",
          dataIndex: "CK",
          key: "CK",
          width: 60,
          sorter: (a, b) => a.CK - b.CK,
        },
        {
          title: "FK",
          dataIndex: "FK",
          key: "FK",
          width: 60,
          sorter: (a, b) => a.FK - b.FK,
        },
        {
          title: "Cr",
          dataIndex: "Cr",
          key: "Cr",
          width: 60,
          sorter: (a, b) => a.Cr - b.Cr,
        },
        {
          title: "TI",
          dataIndex: "TI",
          key: "TI",
          width: 60,
          sorter: (a, b) => a.TI - b.TI,
        },
        {
          title: "GK",
          dataIndex: "GK",
          key: "GK",
          width: 60,
          sorter: (a, b) => a.GK - b.GK,
        },
        {
          title: "GTh",
          dataIndex: "GTh",
          key: "GTh",
          width: 60,
          sorter: (a, b) => a.GTh - b.GTh,
        },
        {
          title: "P",
          dataIndex: "P",
          key: "P1",
          width: 60,
          sorter: (a, b) => a.P1 - b.P1,
        },
        {
          title: "W",
          dataIndex: "W",
          key: "W1",
          width: 60,
          sorter: (a, b) => a.W1 - b.W1,
        },
        {
          title: "W%",
          dataIndex: "W%",
          key: "W%",
          width: 60,
          sorter: (a, b) => a["W%"] - b["W%"],
        },
      ],
    },
    {
      title: "Passing",
      key: "Passing",
      children: [
        {
          title: "Total",
          dataIndex: "Total",
          key: "Total",
          width: 80,
          sorter: (a, b) => a.Total - b.Total,
        },
        {
          title: "Att",
          dataIndex: "Att",
          key: "Att",
          width: 60,
          sorter: (a, b) => a.Att - b.Att,
        },
        {
          title: "Mid",
          dataIndex: "Mid",
          key: "Mid",
          width: 60,
          sorter: (a, b) => a.Mid - b.Mid,
        },
        {
          title: "Def",
          dataIndex: "Def",
          key: "Def",
          width: 60,
          sorter: (a, b) => a.Def - b.Def,
        },
        {
          title: "Fwd",
          dataIndex: "Fwd",
          key: "Fwd",
          width: 60,
          sorter: (a, b) => a.Fwd - b.Fwd,
        },
        {
          title: "Fwd Att 3rd",
          dataIndex: "Fwd Att 3rd",
          key: "Fwd_Att_3rd",
          width: 100,
          sorter: (a, b) => a["Fwd Att 3rd"] - b["Fwd Att 3rd"],
        },
        {
          title: "Bck",
          dataIndex: "Bck",
          key: "Bck",
          width: 60,
          sorter: (a, b) => a.Bck - b.Bck,
        },
        {
          title: "Sde",
          dataIndex: "Sde",
          key: "Sde",
          width: 60,
          sorter: (a, b) => a.Sde - b.Sde,
        },
        {
          title: "Sh",
          dataIndex: "Sh",
          key: "Sh",
          width: 60,
          sorter: (a, b) => a.Sh - b.Sh,
        },
        {
          title: "Med",
          dataIndex: "Med",
          key: "Med",
          width: 80,
          sorter: (a, b) => a.Med - b.Med,
        },
        {
          title: "Lng",
          dataIndex: "Lng",
          key: "Lng",
          width: 60,
          sorter: (a, b) => a.Lng - b.Lng,
        },
      ],
    },
  ];

  // const tableColumns = columns.map((item) => ({ ...item }));

  const tableProps = {
    bordered: true,
    loading: loading ? true : false,
    scroll: {
      x: 50,
      y: 600,
    },
  };

  return (
    <ChartContainer id="chart">
      {data && (
        <Table
          {...tableProps}
          dataSource={data}
          columns={columns}
          key={data.Athlete}
          style={{ fontSize: "0.2rem" }}
        />
      )}
    </ChartContainer>
  );
};

export default TableTemplate;
