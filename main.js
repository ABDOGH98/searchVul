const puppeteer = require("puppeteer");

let dt = new Date();
let day = dt.getUTCDate();
let year = dt.getUTCFullYear();

async function getVul1(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const dates = [];
	for (let i = 1; i <= 6; i++) {
		const [date] = await page.$x(
			`//*[@id="block-views-block-us-cert-current-activity-block-4"]/div/div/div[2]/div[${i}]/div[1]/span[2]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split(" ")[1]) === day &&
			parseInt(String(dateVul).split(" ")[2]) === year
		) {
			const [link] = await page.$x(
				`//*[@id="block-views-block-us-cert-current-activity-block-4"]/div/div/div[2]/div[${i}]/h3/span/a`,
			);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			const [title] = await page.$x(
				`//*[@id="block-views-block-us-cert-current-activity-block-4"]/div/div/div[2]/div[${i}]/h3/span/a`,
			);
			const getTitle = await link.getProperty("textContent");
			const titleVul = await getTitle.jsonValue();

			let data = { date: dateVul, Title: titleVul, link: linkVul };
			console.log(data);
		}
	}
	browser.close();
}
async function getVul2(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const dates = [];
	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/div/div/section/div[2]/div/div[1]/section/article[${i}]/section[1]/div[2]/span[2]`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();
		if (
			parseInt(String(dateVul).split(" ")[2]) === day &&
			parseInt(String(dateVul).split(" ")[4]) === year
		) {
			const [link] = await page.$x(
				`/html/body/div/div/section/div[2]/div/div[1]/section/article[${i}]/section[1]/div[1]/h3/a`,
			);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			const [title] = await page.$x(
				`/html/body/div/div/section/div[2]/div/div[1]/section/article[${i}]/section[1]/div[1]/h3/a`,
			);
			const getTitle = await link.getProperty("textContent");
			const titleVul = await getTitle.jsonValue();

			let data = { date: dateVul, Title: titleVul, link: linkVul };
			console.log(data);
		}

		// dates.push({date : dateVul , Title : titleVul , link : linkVul})
	}
	browser.close();
}

async function getVul3(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const dates = [];
	for (let i = 1; i <= 20; i++) {
		const [date] = await page.$x(
			`//*[@id="cp-content"]/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[4]/span`,
		);
		if (date) {
			const getDate = await date.getProperty("textContent");
			const dateVul = await getDate.jsonValue();
			if (
				parseInt(String(dateVul).split(" ")[2]) === day &&
				parseInt(String(dateVul).split(" ")[3]) === year
			) {
				const [link] = await page.$x(
					`//*[@id="cp-content"]/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[1]/a`,
				);
				const getLink = await link.getProperty("href");
				const linkVul = await getLink.jsonValue();

				const [title] = await page.$x(
					`//*[@id="cp-content"]/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[1]/a`,
				);
				const getTitle = await link.getProperty("textContent");
				const titleVul = await getTitle.jsonValue();

				const [impact] = await page.$x(
					`//*[@id="cp-content"]/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[2]/div`,
				);
				const getImpact = await impact.getProperty("textContent");
				const impactVul = await getImpact.jsonValue();

				const [status] = await page.$x(
					`/html/body/div[2]/div[1]/main/div/article/div/div/div[2]/table[2]/tbody/tr[${i}]/td[3]/text()`,
				);
				const getStatus = await status.getProperty("textContent");
				const statusVul = await getStatus.jsonValue();

				let data = {
					date: dateVul,
					Title: titleVul,
					impact: impactVul,
					status: statusVul,
					link: linkVul,
				};
				console.log(data);
			}
		}
	}
	browser.close();
}
async function getVul4(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const dates = [];
	for (let i = 1; i <= 10; i++) {
		const [date] = await page.$x(
			`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/td[5]/span/time`,
		);
		const getDate = await date.getProperty("textContent");
		const dateVul = await getDate.jsonValue();

		if (
			parseInt(String(dateVul).split(" ")[0]) === day &&
			parseInt(String(dateVul).split(" ")[2]) === year
		) {
			const [link] = await page.$x(
				`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/th/span/a`,
			);
			const getLink = await link.getProperty("href");
			const linkVul = await getLink.jsonValue();

			const [title] = await page.$x(
				`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/th/span/a`,
			);
			const getTitle = await title.getProperty("textContent");
			const titleVul = await getTitle.jsonValue();

			const [synopsis] = await page.$x(
				`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/td[2]/span`,
			);
			const getSynopsis = await synopsis.getProperty("textContent");
			const synopsisVul = await getSynopsis.jsonValue();

			const [produit] = await page.$x(
				`/html/body/div[2]/div[1]/main/div/div/div/div[1]/div/div/div[3]/div/div/div[2]/table/tbody/tr[${i}]/td[4]/span`,
			);
			const getProduit = await produit.getProperty("textContent");
			const produitVul = await getProduit.jsonValue();

			let data = {
				date: dateVul,
				title: titleVul,
				synopsis: synopsisVul,
				produit: produitVul,
				link: linkVul,
			};
			console.log(data);
		}
	}
	browser.close();
}

getVul1("https://us-cert.cisa.gov/ncas/current-activity");
getVul2("https://www.cert.ssi.gouv.fr/2021/");
getVul3("https://access.redhat.com/security/vulnerabilities/");
getVul4(
	"https://access.redhat.com/errata/#/?q=&p=1&sort=portal_publication_date%20desc&rows=10&portal_advisory_type=Security%20Advisory",
);
