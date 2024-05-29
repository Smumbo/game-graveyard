/* TODO: add conditional rendering */

import Windows from "@/icons/platforms/Windows";
import MacOS from "@/icons/platforms/MacOS";
import Linux from "@/icons/platforms/Linux";
import ChromeOS from "@/icons/platforms/ChromeOS";
import Android from "@/icons/platforms/Android";
import IOS from "@/icons/platforms/IOS";
import Meta from "@/icons/platforms/Meta";
import PlayStation from "@/icons/platforms/PlayStation";
import Xbox from "@/icons/platforms/Xbox";
import GameCube from "@/icons/platforms/GameCube";

const iconSize = 36;
const iconColor = "#525252";

export default function Platforms(props: { platforms: string[] }) {
  const platforms = props.platforms;

  return (
    <ul className="flex flex-row">
      {/* Desktop operating systems */}
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
          alt="Google Chrome Logo"
          className="dark:invert"
          width={iconSize}
          height="auto"
          currentColor={iconColor}
        />
      </li>

      {/* Mobile operating systems */}
      <li key="Android" className="inline" title="Android">
        <Android
          alt="Android Logo"
          className="dark:invert"
          width={iconSize}
          height="auto"
          currentColor={iconColor}
        />
      </li>
      <li key="iOS" className="inline" title="iOS">
        <IOS
          alt="iOS Logo"
          className="dark:invert"
          width={iconSize}
          height="auto"
          currentColor={iconColor}
        />
      </li>
      <li key="Meta" className="inline" title="Meta Quest">
        <Meta
          alt="Meta Logo"
          className="dark:invert"
          width={iconSize}
          height="auto"
          currentColor={iconColor}
        />
      </li>

      {/* Consoles */}
      <li key="PlayStation" className="inline" title="PlayStation">
        <PlayStation
          alt="PlayStation Logo"
          className="dark:invert"
          width={iconSize}
          height="auto"
          currentColor={iconColor}
        />
      </li>
      <li key="Xbox" className="inline" title="Xbox">
        <Xbox
          alt="Xbox Logo"
          className="dark:invert"
          width={iconSize-4}
          height="auto"
          currentColor={iconColor}
        />
      </li>
      <li key="GameCube" className="inline" title="GameCube">
        <GameCube
          alt="GameCube logo"
          className="dark:invert"
          width={iconSize-4}
          height="auto"
          currentColor={iconColor}
        />
      </li>
    </ul>
  )
}