import chalk from "chalk";

export function displayBanner() {
  console.log(
    chalk.cyan(`
 -================= ≫ ──── ≪•◦ ❈ ◦•≫ ──── ≪=================-
 │                                                          │
 │  ██████╗  █████╗ ██████╗ ██╗  ██╗                        │
 │  ██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝                        │
 │  ██║  ██║███████║██████╔╝█████╔╝                         │
 │  ██║  ██║██╔══██║██╔══██╗██╔═██╗                         │
 │  ██████╔╝██║  ██║██║  ██║██║  ██╗                        │
 │  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝                        │
 │                                                          │
 │                                                          │
 ╰─━━━━━━━━━━━━━━━━━━━━━━━━Termux-os━━━━━━━━━━━━━━━━━━━━━━━─╯
                                                             

                   ${chalk.yellow("TENEO - BOT ")}                
     📢  ${chalk.blue("Telegram Channel: https://t.me/scripthub00")}`)
  );

  console.log(
    chalk.yellow("\n════════════════════════════════════════════════════════")
  );
  console.log(chalk.white(`Started at: ${new Date().toLocaleString()}`));
  console.log(
    chalk.yellow("════════════════════════════════════════════════════════\n")
  );
}
