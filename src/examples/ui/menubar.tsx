import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Operations</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Report <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Directive <MenubarShortcut>⌘D</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>Classified Document</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Distribute To</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>All Sectors</MenubarItem>
              <MenubarItem>Unit Leaders</MenubarItem>
              <MenubarItem>Central Command</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print Manifesto <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Records</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo Entry <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo Entry <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Search Archives</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Worker Records</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Production Logs</MenubarItem>
              <MenubarItem>Incident Reports</MenubarItem>
              <MenubarItem>Commendations</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Export Data</MenubarItem>
          <MenubarItem>Import Records</MenubarItem>
          <MenubarItem>Archive Selection</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Display</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Show Quota Metrics</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Show Worker Status
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Refresh <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Sync <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Full Dashboard</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Compact View</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Comrades</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="ivanov">
            <MenubarRadioItem value="ivanov">★ Cmdr. Ivanov</MenubarRadioItem>
            <MenubarRadioItem value="petrov">Capt. Petrov</MenubarRadioItem>
            <MenubarRadioItem value="volkov">Lt. Volkov</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit Profile...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Register New Worker...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
