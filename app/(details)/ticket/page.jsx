import TopNav from "@/app/ui/top-nav"
import QRCode from "@/app/ui/ticket/qr-code"
import TicketDetail from "@/app/ui/ticket/ticket-detail"
import ButtonBottom from "@/app/ui/button-bottom"

export default function Ticket() {
    return (
        <div className="relative max-w-[420px] h-screen mx-auto bg-putih">
            <TopNav title="Ticket"/>
            <div className="mx-6 my-4 border-[1px] border-biru3 rounded-2xl">
                <QRCode/>
                <TicketDetail />
            </div>
            <ButtonBottom name="Download Tiket" />
        </div>
    )
}