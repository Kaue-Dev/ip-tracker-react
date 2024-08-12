import { DisplayData, Separator } from "./styles";

interface DataDisplayProps {
  data: {
    ip: string;
    location: {
      country: string;
      region: string;
      timezone: string;
    }
    as: {
      asn: string;
      name: string;
      route: string;
      domain: string;
      type: string;
    }
    isp: string;
  } | null;
}

export const DataDisplay = ({ data }: DataDisplayProps) => {
  return (
    <DisplayData>
      <div>
        <h2>IP Address</h2>
        <p>{data ? data.ip : "..."}</p>
      </div>
      <Separator />
      <div>
        <h2>Location</h2>
        <p>
          {data ? data.location.region + ", " + data.location.country : "..."}
        </p>
      </div>
      <Separator />
      <div>
        <h2>Domain</h2>
        <p>{data ? data.as.domain : "..."}</p>
      </div>
      <Separator />
      <div>
        <h2>ISP</h2>
        <p>{data ? data.isp : "..."}</p>
      </div>
    </DisplayData>
  );
};