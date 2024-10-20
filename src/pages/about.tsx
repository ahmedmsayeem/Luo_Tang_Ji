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
     
     About Page


     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora provident id rerum ut illo saepe, dolore dolores harum vero, sit assumenda autem rem quaerat, aliquam voluptas dolorem totam sapiente. Sit?
     Quis nobis aut voluptatibus, ex delectus omnis dolorum dignissimos, aliquid unde iusto, voluptatem voluptatum pariatur enim suscipit temporibus! Eos minima reiciendis laborum non minus voluptatum nobis sequi eveniet consequuntur autem?
     Animi excepturi, hic impedit magni repudiandae, ut explicabo quaerat placeat nulla, blanditiis laboriosam aperiam quos autem distinctio nihil eaque unde amet ratione labore numquam est illum obcaecati quas iste? Cupiditate.
     Dignissimos cupiditate delectus fugit, expedita rerum nihil quidem eum a illum eveniet, quo sapiente nostrum sunt vero placeat. Eum minima culpa temporibus sit fugiat voluptas sed inventore odio distinctio natus?
     Nihil explicabo assumenda amet fugit cum velit dignissimos numquam quia facere omnis ullam, reprehenderit mollitia quidem, corporis recusandae ratione dolores ducimus error voluptas vel quibusdam architecto. Inventore perferendis nostrum suscipit!
     Cumque omnis repudiandae placeat pariatur rem libero quisquam doloribus explicabo quidem commodi nesciunt praesentium veritatis quae, asperiores officia saepe unde rerum laudantium ut! Sit est autem incidunt obcaecati dolores provident?
     Temporibus harum nam illo, quos, ipsam ex dolor nisi, nobis dolore quidem sequi itaque est id ea sunt nihil! Voluptatem quasi error nulla laboriosam aspernatur at, voluptate sunt voluptatibus atque.
     Voluptate voluptatum doloremque quaerat tempore, ducimus adipisci id fuga at eum eaque corrupti inventore officiis quod assumenda excepturi exercitationem harum debitis, eligendi numquam eius impedit? Sint rem possimus ipsa repudiandae!
     Quam odit beatae ad odio dignissimos dolore, adipisci at a aliquid eligendi. Nam excepturi adipisci veniam earum recusandae. Consequatur fugiat autem in corporis aliquam tempora aut suscipit ratione culpa dolore!</p>
    </div>
  );
}
