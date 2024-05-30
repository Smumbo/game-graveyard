/* TODO: add conditional rendering */

import Windows from "@/icons/platforms/Windows";
import MacOS from "@/icons/platforms/MacOS";
import Linux from "@/icons/platforms/Linux";
import ChromeOS from "@/icons/platforms/ChromeOS";
import Android from "@/icons/platforms/Android";
import IOS from "@/icons/platforms/IOS";
import Meta from "@/icons/platforms/Meta";
import WindowsPhone from "@/icons/platforms/WindowsPhone";
import WindowsMobile from "@/icons/platforms/WindowsMobile";
import KindleFire from "@/icons/platforms/KindleFire";
import BlackBerry from "@/icons/platforms/Blackberry";
import PlayStation from "@/icons/platforms/PlayStation";
import Xbox from "@/icons/platforms/Xbox";
import Dreamcast from "@/icons/platforms/DreamCast";
import GameCube from "@/icons/platforms/GameCube";
import Wii from "@/icons/platforms/Wii";
import WiiU from "@/icons/platforms/WiiU";
import Switch from "@/icons/platforms/Switch";
import NDS from "@/icons/platforms/NDS";
import N3DS from "@/icons/platforms/N3DS";
import Stadia from "@/icons/platforms/Stadia";
import Luna from "@/icons/platforms/Luna";

const iconColor = "#525252";

export default function Platforms(props: { platforms: string[] }) {
  const platforms = props.platforms;

  return (
    <ul className="flex flex-row">
      {/* Desktop operating systems */}
      <li key="PC" className="inline" title="PC (Windows)">
        <Windows
          alt="Windows logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="macOS" className="inline" title="macOS">
        <MacOS
          alt="macOS logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Linux" className="inline" title="Linux">
        <Linux
          alt="Linux logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="ChromeOS" className="inline" title="ChromeOS">
        <ChromeOS
          alt="Google Chrome logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>

      {/* Mobile operating systems */}
      <li key="Android" className="inline" title="Android">
        <Android
          alt="Android logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="iOS" className="inline" title="iOS">
        <IOS
          alt="iOS logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Meta" className="inline" title="Meta Quest">
        <Meta
          alt="Meta logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Windows Phone" className="inline" title="Windows Phone">
        <WindowsPhone
          alt="Windows Phone icon"
          className="dark:invert"
          width={20}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Windows Mobile" className="inline" title="Windows Mobile">
        <WindowsMobile
          alt="Windows Mobile icon"
          className="dark:invert"
          width={24}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Kindle Fire" className="inline" title="Amazon Kindle Fire">
        <KindleFire
          alt="Amazon Kindle Fire logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="BlackBerry" className="inline" title="BlackBerry">
        <BlackBerry
          alt="BlackBerry logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>

      {/* Consoles */}
      <li key="PlayStation" className="inline" title="PlayStation">
        <PlayStation
          alt="PlayStation logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Xbox" className="inline" title="Xbox">
        <Xbox
          alt="Xbox logo"
          className="dark:invert"
          width={32}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Dreamcast" className="inline" title="Sega Dreamcast">
        <Dreamcast
          alt="Sega Dreamcast logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="GameCube" className="inline" title="GameCube">
        <GameCube
          alt="GameCube logo"
          className="dark:invert"
          width={32}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Wii" className="inline" title="Wii">
        <Wii
          alt="Wii logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="WiiU" className="inline" title="Wii U">
        <WiiU
          alt="Wii U logo"
          className="dark:invert"
          width={32}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Switch" className="inline" title="Nintendo Switch">
        <Switch
          alt="Nintendo Switch logo"
          className="dark:invert"
          width={32}
          height="auto"
          currentcolor={iconColor}
        />
      </li>

      {/* Handhelds */}
      <li key="NDS" className="inline" title="Nintendo DS">
        <NDS
          alt="Nintendo DS logo"
          className="dark:invert"
          width={42}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="3DS" className="inline" title="Nintendo 3DS">
        <N3DS
          alt="Nintendo 3DS logo"
          className="dark:invert"
          width={52}
          height="auto"
          currentcolor={iconColor}
        />
      </li>

      {/* Streaming platforms */}
      <li key="Stadia" className="inline" title="Google Stadia">
        <Stadia
          alt="Google Stadia logo"
          className="dark:invert"
          width={36}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
      <li key="Luna" className="inline" title="Amazon Luna">
        <Luna
          alt="Amazon Luna logo"
          className="dark:invert"
          width={32}
          height="auto"
          currentcolor={iconColor}
        />
      </li>
    </ul>
  )
}