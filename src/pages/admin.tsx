// import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
     
     Admin Page


     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit voluptate dolore ipsa, laborum, consequatur dignissimos, repellendus id harum nesciunt nihil. Magni, doloremque excepturi. Corrupti unde non rem architecto libero!
     Illum necessitatibus quas voluptates explicabo molestiae, sit dolorum architecto laudantium delectus? Ducimus itaque quaerat aliquid fugiat velit nihil consectetur sit aliquam sequi, quibusdam nisi quas, quam repellat labore debitis ratione.
     Suscipit minima inventore minus consequuntur magnam voluptate quis porro laborum? At, doloribus, quas adipisci, rerum magnam perspiciatis quam quod a perferendis vel facere ea laudantium amet! Dicta voluptatem earum repudiandae.
     Magni obcaecati eveniet placeat omnis odio nemo ad cum provident facere sed, quidem iusto nulla, iure quae. Voluptates, dignissimos quod, rem facere quas sunt cum omnis distinctio, placeat ea quidem!
     Officiis aspernatur, velit totam amet ipsam fuga voluptate? Nulla veniam tempora consequuntur veritatis numquam laboriosam ullam! Possimus eos blanditiis officiis eaque dolor commodi impedit, cumque veritatis facilis dolores reiciendis tempore.
     Obcaecati perferendis laborum repellendus ullam eos ducimus quas ea dolores est quo. Saepe quod itaque quaerat ab odio tenetur quas! Beatae tenetur laboriosam in consectetur sed esse doloribus ullam ratione?
     Voluptatem, est? Perspiciatis quisquam hic iure totam aperiam non possimus quos reiciendis placeat magnam molestias necessitatibus eveniet ratione dolorum repellendus velit nulla ab alias, omnis laboriosam. Earum velit repellat explicabo?
     Ad dolor nisi animi voluptas culpa asperiores quas vero praesentium? Atque dolore fugit iusto, soluta distinctio repellat ea quam a, culpa quo in reiciendis ut optio aperiam itaque quia quisquam.
     Consequuntur quas ipsa est ut ea rerum incidunt? Labore recusandae aut quis incidunt dolor dolorem, consequatur, quidem necessitatibus deserunt impedit modi optio a ut rem aspernatur repellendus aliquam dolore praesentium.
     Dolorem quasi doloremque ex, nesciunt dolorum animi reprehenderit accusamus earum excepturi voluptas possimus asperiores tempora hic sint! Aperiam provident impedit, quam, ratione aliquam iste sint dignissimos eius fugiat, quod sit!</p>
    </div>
  );
}
