import { Table } from "antd";
import { useSelector } from "react-redux";
import { columns } from '../consts/tableHeaders';
import {ChartContainer} from './TableStyles'



const TableTemplate = () => {
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);

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
