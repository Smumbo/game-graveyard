/* TODO: add web icon */

import Windows from "@/icons/platforms/Windows";
import MacOS from "@/icons/platforms/MacOS";
import Linux from "@/icons/platforms/Linux";
import ChromeOS from "@/icons/platforms/ChromeOS";
import Android from "@/icons/platforms/Android";
import IOS from "@/icons/platforms/IOS";
import Meta from "@/icons/platforms/Meta";
import WindowsPhone from "@/icons/platforms/WindowsPhone";
import KindleFire from "@/icons/platforms/KindleFire";
import BlackBerry from "@/icons/platforms/BlackBerry";
import PlayStation from "@/icons/platforms/PlayStation";
import Xbox from "@/icons/platforms/Xbox";
import Dreamcast from "@/icons/platforms/Dreamcast";
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

  function MakeWindowsIcon() {
    if (platforms.includes("PC")) {
      return (
        <li key="PC" className="inline" title="PC (Windows)">
          <Windows
            alt="Windows logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeMacOSIcon() {
    if (platforms.includes("macOS")) {
      return (
        <li key="macOS" className="inline" title="macOS">
          <MacOS
            alt="macOS logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeLinuxIcon() {
    if (platforms.includes("Linux")) {
      return (
        <li key="Linux" className="inline" title="Linux">
          <Linux
            alt="Linux logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeChromeOSIcon() {
    if (platforms.includes("ChromeOS")) {
      return (
        <li key="ChromeOS" className="inline" title="ChromeOS">
          <ChromeOS
            alt="Google Chrome logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeAndroidIcon() {
    if (platforms.includes("Android")) {
      return (
        <li key="Android" className="inline" title="Android">
          <Android
            alt="Android logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeiOSIcon() {
    if (platforms.includes("iOS")) {
      return (
        <li key="iOS" className="inline" title="iOS">
          <IOS
            alt="iOS logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeMetaIcon() {
    if (platforms.includes("Meta Quest")) {
      return (
        <li key="Meta" className="inline" title="Meta Quest">
          <Meta
            alt="Meta logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeWindowsPhoneIcon() {
    if (platforms.includes("Windows Phone")) {
      return (
        <li key="Windows Phone" className="inline" title="Windows Phone">
          <WindowsPhone
            alt="Windows Phone icon"
            className="dark:invert"
            width={20}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeKindleFireIcon() {
    if (platforms.includes("Kindle Fire")) {
      return (
        <li key="Kindle Fire" className="inline" title="Amazon Kindle Fire">
          <KindleFire
            alt="Amazon Kindle Fire logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeBlackBerryIcon() {
    var hasBlackberry = false;
    var title = "";

    if (platforms.includes("BlackBerry PlayBook")) {
      hasBlackberry = true;
      title = "BlackBerry PlayBook"
    } else if (platforms.includes("BlackBerry OS")) {
      hasBlackberry = true;
      title = "BlackBerry OS"
    }

    if (hasBlackberry) {
      return (
        <li key="BlackBerry" className="inline" title={title}>
          <BlackBerry
            alt="BlackBerry logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakePlayStationIcon() {
    var hasPlaystation = false;
    var title = "";

    if (platforms.includes("PS2")) {
      hasPlaystation = true;
      title = "PlayStation 2";
    }
    if (platforms.includes("PS3")) {
      if (hasPlaystation) {
        title += ", PlayStation 3";
      } else {
        hasPlaystation = true;
        title = "PlayStation 3";
      }
    }
    if (platforms.includes("PS4")) {
      if (hasPlaystation) {
        title += ", PlayStation 4";
      } else {
        hasPlaystation = true;
        title = "PlayStation 4";
      }
    }
    if (platforms.includes("PS5")) {
      if (hasPlaystation) {
        title += ", PlayStation 5";
      } else {
        hasPlaystation = true;
        title = "PlayStation 5";
      }
    }
    if (platforms.includes("PSP")) {
      if (hasPlaystation) {
        title += ", PlayStation Portable";
      } else {
        hasPlaystation = true;
        title = "PlayStation Portable";
      }
    }
    if (platforms.includes("PS Vita")) {
      if (hasPlaystation) {
        title += ", PlayStation Vita";
      } else {
        hasPlaystation = true;
        title = "PlayStation Vita";
      }
    }

    if (hasPlaystation) {
      return (
        <li key="PlayStation" className="inline" title={title}>
          <PlayStation
            alt="PlayStation logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeXboxIcon() {
    var hasXbox = false;
    var title = "";

    if (platforms.includes("XB")) {
      hasXbox = true;
      title = "Xbox";
    }
    if (platforms.includes("XB360")) {
      if (hasXbox) {
        title += ", Xbox 360";
      } else {
        hasXbox = true;
        title = "Xbox 360";
      }
    }
    if (platforms.includes("XB1")) {
      if (hasXbox) {
        title += ", Xbox One";
      } else {
        hasXbox = true;
        title = "Xbox One";
      }
    }
    if (platforms.includes("XB X/S")) {
      if (hasXbox) {
        title += ", Xbox Series X/S";
      } else {
        hasXbox = true;
        title = "Xbox Series X/S";
      }
    }

    if (hasXbox) {
      return (
        <li key="Xbox" className="inline" title="Xbox">
          <Xbox
            alt="Xbox logo"
            className="dark:invert"
            width={32}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeDreamcastIcon() {
    if (platforms.includes("Dreamcast")) {
      return (
        <li key="Dreamcast" className="inline" title="Sega Dreamcast">
          <Dreamcast
            alt="Sega Dreamcast logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeGameCubeIcon() {
    if (platforms.includes("GameCube")) {
      return (
        <li key="GameCube" className="inline" title="GameCube">
          <GameCube
            alt="GameCube logo"
            className="dark:invert"
            width={32}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeWiiIcon() {
    if (platforms.includes("Wii")) {
      return (
        <li key="Wii" className="inline" title="Wii">
          <Wii
            alt="Wii logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeWiiUIcon() {
    if (platforms.includes("Wii U")) {
      return (
        <li key="WiiU" className="inline" title="Wii U">
          <WiiU
            alt="Wii U logo"
            className="dark:invert"
            width={32}
            currentcolor={iconColor}
          />
        </li>
      )
    }
  }
  function MakeSwitchIcon() {
    if (platforms.includes("Switch")) {
      return (
        <li key="Switch" className="inline" title="Nintendo Switch">
          <Switch
            alt="Nintendo Switch logo"
            className="dark:invert"
            width={32}
            currentcolor={iconColor}
          />
        </li>
      )
    }
    return null;
  }
  function MakeDSIcon() {
    if (platforms.includes("DS")) {
      return (
        <li key="NDS" className="inline" title="Nintendo DS">
          <NDS
            alt="Nintendo DS logo"
            className="dark:invert"
            width={42}
            currentcolor={iconColor}
          />
        </li>
      )
    }
  }
  function Make3DSIcon() {
    if (platforms.includes("3DS")) {
      return (
        <li key="3DS" className="inline" title="Nintendo 3DS">
          <N3DS
            alt="Nintendo 3DS logo"
            className="dark:invert"
            width={52}
            currentcolor={iconColor}
          />
        </li>
      )
    }
  }
  function MakeStadiaIcon() {
    if (platforms.includes("Stadia")) {
      return (
        <li key="Stadia" className="inline" title="Google Stadia">
          <Stadia
            alt="Google Stadia logo"
            className="dark:invert"
            width={36}
            currentcolor={iconColor}
          />
        </li>
      )
    }
  }
  function MakeLunaIcon() {
    if (platforms.includes("Luna")) {
      return (
        <li key="Luna" className="inline" title="Amazon Luna">
          <Luna
            alt="Amazon Luna logo"
            className="dark:invert"
            width={32}
            currentcolor={iconColor}
          />
        </li>
      )
    }
  }

  return (
    <ul className="flex flex-row">
      {/* Desktop operating systems */}
      {MakeWindowsIcon()}
      {MakeMacOSIcon()}
      {MakeLinuxIcon()}
      {MakeChromeOSIcon()}

      {/* Mobile operating systems */}
      {MakeAndroidIcon()}
      {MakeiOSIcon()}
      {MakeMetaIcon()}
      {MakeWindowsPhoneIcon()}
      {MakeKindleFireIcon()}
      {MakeBlackBerryIcon()}

      {/* Consoles */}
      {MakePlayStationIcon()}
      {MakeXboxIcon()}
      {MakeDreamcastIcon()}
      {MakeGameCubeIcon()}
      {MakeWiiIcon()}
      {MakeWiiUIcon()}
      {MakeSwitchIcon()}

      {/* Handhelds */}
      {MakeDSIcon()}
      {Make3DSIcon()}

      {/* Streaming platforms */}
      {MakeStadiaIcon()}
      {MakeLunaIcon()}
    </ul>
  )
}