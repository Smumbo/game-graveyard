/** 
 * SVG icons converted using https://transform.tools
 */

import ChromeOS from "@/icons/platforms/ChromeOS";
import Linux from "@/icons/platforms/Linux";
import Windows from "@/icons/platforms/Windows";
import MacOS from "@/icons/platforms/MacOS";

const iconSize = 36;
const iconColor = "#525252";

export default function Platforms(props: { platforms: string[] }) {
  const platforms = props.platforms;

  return (
    <ul className="flex flex-row">
      <li key="PC" className="inline" title="PC (Windows)">
        <Windows
          alt="Windows Logo"
          className="dark:invert"
          width={iconSize}
          height="auto"
          currentColor={iconColor}
        />
      </li>
      <li key="macOS" className="inline" title="macOS">
        <MacOS
          alt="macOS Logo"
          className="dark:invert"
          width={iconSize}
          height="auto"
          currentColor={iconColor}
        />
      </li>
      <li key="Linux" className="inline" title="Linux">
        <Linux
          alt="Linux Logo"
          className="dark:invert"
          width={iconSize}
          height="auto"
          currentColor={iconColor}
        />
      </li>
      <li key="ChromeOS" className="inline" title="ChromeOS">
        <ChromeOS
          alt="ChromeOS Logo"
          className="dark:invert"
          width={iconSize}
          height="auto"
          currentColor={iconColor}
        />
      </li>
    </ul>
  )
}