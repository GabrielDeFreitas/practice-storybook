import { Bell, BellOff, BellPlus, Check, X } from "lucide-react"
import { Notification } from "./components/Notification"

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-4 p-6">
          <h1 className="text-xl font-semibold">Practice Storybook</h1>
          <Notification.Root>
            <Notification.Icon icon={Bell}/>
            <Notification.Content text="Lorem ipsum dolor" description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."/>
            <Notification.Actions>
              <Notification.Button onClick={() => {alert("check button")}} icon={Check}/>
              <Notification.Button onClick={() => {alert("close button")}} icon={X}/>
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={BellOff}/>
            <Notification.Content text="Lorem ipsum dolor" description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."/>
            <Notification.Actions>
              <Notification.Button onClick={() => {alert("close button")}} icon={X}/>
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={BellPlus}/>
            <Notification.Content text="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."/>
          </Notification.Root>
      </div>
    </>
  )
}