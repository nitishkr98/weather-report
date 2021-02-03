import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const Chart = ({ data, color }) => {
  return (
    <Sparklines data={data} width={180} height={120}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
  );
};

export default Chart;
