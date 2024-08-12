import { ChevronRight } from "lucide-react";
import { StyledHeader } from "./styles";
import { FormEvent } from "react";
import bgPatternDesktop from "../../assets/pattern-bg-desktop.png"

interface HeaderProps {
  ipAddress: string;
  setIpAddress: (value: string) => void;
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}

export const Header = ({
  ipAddress,
  setIpAddress,
  handleSubmit,
}: HeaderProps) => {
  return (
    <StyledHeader imgUrl={bgPatternDesktop}>
      <form onSubmit={handleSubmit}>
        <h1>IP Address Tracker</h1>
        <div>
          <input
            type="text"
            placeholder="Search for any IP Address"
            value={ipAddress}
            onChange={(ev) => setIpAddress(ev.target.value)}
          />
          <button type="submit">
            <ChevronRight />
          </button>
        </div>
      </form>
    </StyledHeader>
  );
};