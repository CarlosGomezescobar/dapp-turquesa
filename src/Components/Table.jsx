import React from 'react'

const Table = () => {
    const tableData = [
        {
            id:1,
            date:"27/03/2023",
            token:"BTCUSDT",
            position: "LONG",
            entry: "27,775.80",
            exit: "27,813.80",
            percent: "16.63%",
            pool: "5%"
        },
        {
            id:2,
            date:"27/03/2023",
            token:"BTCUSDT",
            position: "LONG",
            entry: "27,105.90",
            exit: "27,126.10",
            percent: "9.31%",
            pool: "5%"
        },
        {
            id:3,
            date:"27/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "1,716.12",
            exit: "1,718.19",
            percent: "12.02%",
            pool: "5%"
        },
        {
            id:4,
            date:"27/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "1,710.95",
            exit: "1,712.18",
            percent: "7.16%",
            pool: "5%"
        },
        {
            id:5,
            date:"28/03/2023",
            token:"BTCUSDT",
            position: "LONG",
            entry: "27,075.59",
            exit: "27,098.40",
            percent: "10.52%",
            pool: "5%"
        },
        {
            id:6,
            date:"28/03/2023",
            token:"SOLUSDT",
            position: "LONG",
            entry: "200.235",
            exit: "200.460",
            percent: "5.59%",
            pool: "5%"
        },
        {
            id:7,
            date:"28/03/2023",
            token:"XRPUSDT",
            position: "LONG",
            entry: "4.840",
            exit: "4.874",
            percent: "52.06%",
            pool: "5%"
        },
        {
            id:8,
            date:"28/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "1,738.88",
            exit: "1,744.01",
            percent: "29.41%",
            pool: "5%"
        },
        {
            id:9,
            date:"28/03/2023",
            token:"BTCUSDT",
            position: "LONG",
            entry: "26,928.92",
            exit: "26,962.00",
            percent: "15.33%",
            pool: "5%"
        },
        {
            id:10,
            date:"28/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "1,735.01",
            exit: "1,734.21",
            percent: "-4.61%",
            pool: "5%"
        },
        {
            id:11,
            date:"28/03/2023",
            token:"SOLUSDT",
            position: "SHORT",
            entry: "201.143",
            exit: "200.820",
            percent: "8.5%",
            pool: "5%"
        },
        {
            id:12,
            date:"28/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "1,736.17",
            exit: "1,740.34",
            percent: "23.95%",
            pool: "5%"
        },
        {
            id:13,
            date:"29/03/2023",
            token:"BTCUSDT",
            position: "LONG",
            entry: "27,386.20",
            exit: "27,537.40",
            percent: "68.63%",
            pool: "5%"
        },
        {
            id:14,
            date:"29/03/2023",
            token:"BTCUSDT",
            position: "LONG",
            entry: "27,527.20",
            exit: "27,572.00",
            percent: "20.31%",
            pool: "5%"
        },
        {
            id:15,
            date:"29/03/2023",
            token:"XRPUSDT",
            position: "LONG",
            entry: "5.527",
            exit: "5.545",
            percent: "24.23%",
            pool: "5%"
        },
        {
            id:16,
            date:"29/03/2023",
            token:"BTCUSDT",
            position: "LONG",
            entry: "28,335.70",
            exit: "28,428.10",
            percent: "40.63%",
            pool: "5%"
        },
        {
            id:17,
            date:"29/03/2023",
            token:"LTCUSDT",
            position: "LONG",
            entry: "92.29",
            exit: "92.49",
            percent: "5.41%",
            pool: "5%"
        },
        {
            id:18,
            date:"29/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "1,803.71",
            exit: "1,810.31",
            percent: "36.46%",
            pool: "5%"
        },
        {
            id:19,
            date:"30/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "1,792.88",
            exit: "1,795.50",
            percent: "14.59%",
            pool: "5%"
        },
        {
            id:20,
            date:"30/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "1,796.69",
            exit: "1,800.45",
            percent: "20.88%",
            pool: "5%"
        },
        {
            id:21,
            date:"30/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "28,529.00",
            exit: "28,582.40",
            percent: "23.35%",
            pool: "5%"
        },
        {
            id:22,
            date:"30/03/2023",
            token:"BTCUSDT",
            position: "LONG",
            entry: "28,600.00",
            exit: "28,651.40",
            percent: "22.42%",
            pool: "5%"
        },
        {
            id:23,
            date:"30/03/2023",
            token:"ETHUSDT",
            position: "LONG",
            entry: "1,802.09",
            exit: "1,804.84",
            percent: "15.21%",
            pool: "5%"
        }
    ]
  return (
    <div className='container-table'
    >
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>DATE</th>
                    <th>TOKEN</th>
                    <th>POSITION</th>
                    <th>ENTRY</th>
                    <th>EXIT</th>
                    <th>%</th>
                    <th>POOL %</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((item,id)=>(
                    <tr key={id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.token}</td>
                    <td>{item.position}</td>
                    <td>{item.entry}</td>
                    <td>{item.exit}</td>
                    <td>{item.percent}</td>
                    <td>{item.pool}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
  )
}

export default Table
