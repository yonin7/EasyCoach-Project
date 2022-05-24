import { Space, Table, Tag } from "antd";
import styled from "styled-components";
const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  width: 90%;
`;

const { Column, ColumnGroup } = Table;

const TableTemplate = ({ data }) => {
  const columns = [
    {
      title:"Athlete",
      dataIndex:"Athlete",
      key:"Athlete",
      fixed: 'left',
      width: 100,
    },
    {title:"Started" ,dataIndex:"Started" ,key:"Started", width: 80},
    {title:"Min" ,dataIndex:"Min" ,key:"Min",width: 80},
    {title:"Touches",key:"Touches",
    children:[
    {title:"T" ,dataIndex:"T" ,key:"T1",width: 50},
    {title:"T Att 3rd" ,dataIndex:"T Att 3rd" ,key:"T_Att_3rd",width: 90},
    {title:"FA" ,dataIndex:"FA" ,key:"FA",width: 50},
    {title:"TO" ,dataIndex:"TO" ,key:"TO",width: 60},
    {title:"SH" ,dataIndex:"SH" ,key:"SH",width: 60},
    {title:"CK" ,dataIndex:"CK" ,key:"CK",width: 60},
    {title:"FK" ,dataIndex:"FK" ,key:"FK",width: 60},
    {title:"Cr" ,dataIndex:"Cr" ,key:"Cr",width: 60},
    {title:"TI" ,dataIndex:"TI" ,key:"TI",width: 60},
    {title:"GK" ,dataIndex:"GK" ,key:"GK",width: 60},
    {title:"GTh" ,dataIndex:"GTh" ,key:"GTh",width: 60},
    {title:"P" ,dataIndex:"P" ,key:"P1",width: 60},
    {title:"W" ,dataIndex:"W" ,key:"W1",width: 60},
    {title:"W%" ,dataIndex:"W%" ,key:"W%",width: 60},
    ]
  },
    {title:"Passing", key:"Passing",
    children:[
    {title:"Total" ,dataIndex:"Total" ,key:"Total",width: 80},
    {title:"Att" ,dataIndex:"Att" ,key:"Att",width: 60},
    {title:"Mid" ,dataIndex:"Mid" ,key:"Mid",width: 60},
    {title:"Def" ,dataIndex:"Def" ,key:"Def",width: 60},
    {title:"Fwd" ,dataIndex:"Fwd" ,key:"Fwd",width: 60},
    {title:"Fwd Att 3rd" ,dataIndex:"Fwd Att 3rd" ,key:"Fwd_Att_3rd",width: 100},
    {title:"Bck" ,dataIndex:"Bck" ,key:"Bck",width: 60},
    {title:"Sde" ,dataIndex:"Sde" ,key:"Sde",width: 60},
    {title:"Sh" ,dataIndex:"Sh" ,key:"Sh",width: 60},
    {title:"Med" ,dataIndex:"Med" ,key:"Med",width: 80},
    {title:"Lng" ,dataIndex:"Lng" ,key:"Lng",width: 60},

    ]
  }
  ];

  // const tableColumns = columns.map((item) => ({ ...item }));

  const tableProps = {
    bordered: true,
    loading: data ? false : true,
    scroll: {
      x: 50,
      y: 300
    },
  };
  console.log(data);

  return (
    <ChartContainer id="chart">
      {data && (
        <Table {...tableProps} dataSource={data} columns={columns} key={data.Athlete}/>
      
      )}
    </ChartContainer>
  );
};

export default TableTemplate;
