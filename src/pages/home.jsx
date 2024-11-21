import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import dailyHadith from "/src/assets/dailyHadith.jpg";
import dailyQuran from "/src/assets/dailyQuran.jpg";


export function Home() {

  const [verseOfTheDay, setVerseOfTheDay] = useState("");
  const [verseTranslation, setVerseTranslation] = useState("");
  const [hadithOfTheDay, setHadithOfTheDay] = useState("");

  useEffect(() => {
    fetch("https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=94:6")
      .then((response) => response.json())
      .then((data) => {
        setVerseOfTheDay(data.verses[0].text_uthmani);
        // console.log(data.verses[0].text_uthmani);
      });

    fetch("https://api.quran.com/api/v4/quran/translations/20?verse_key=94:6")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.translations[0].text);
        setVerseTranslation(data.translations[0].text);
      });

      fetch("https://random-hadith-generator.vercel.app/bukhari/1")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data.hadith_english);
        setHadithOfTheDay(data.data.hadith_english);
      });
  }, []);

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/library.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Al Noor Center of Canada
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-3xl">
                « وَقُلْ جَآءَ ٱلْحَقُّ وَزَهَقَ ٱلْبَـٰطِلُ ۚ إِنَّ ٱلْبَـٰطِلَ كَانَ زَهُوقًا »
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-2xl">
              "And say, 'Truth has come and falsehood has vanished. Indeed, falsehood is surely bound to vanish.' "
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col md:flex-row md:gap-8 w-full">
              <div className="flex-1 max-w-md">
                <Card className="shadow-lg border shadow-gray-500/10 rounded-lg h-full">
                  <CardHeader floated={false} className="relative h-56">
                    <img
                      alt="Card Image"
                      src={dailyHadith}
                      className="h-full w-full"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-4 mt-2 font-bold text-center"
                    >
                      Hadith of the Day
                    </Typography>
                    <Typography className="font-normal text-blue-gray-500 text-center">
                      {hadithOfTheDay}
                    </Typography>
                  </CardBody>
                </Card>
              </div>
              <div className="flex-1 max-w-md mt-8 md:mt-0">
                <Card className="shadow-lg border shadow-gray-500/10 rounded-lg h-full">
                  <CardHeader floated={false} className="relative h-56">
                    <img
                      alt="Card Image"
                      src={dailyQuran}
                      className="h-full w-full"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-4 mt-2 font-bold text-center"
                    >
                      Quran Verse of the Day
                    </Typography>
                    <Typography className="font-normal text-blue-gray-500 text-center text-2xl">
                      «{verseOfTheDay}»
                    </Typography>
                    <Typography className="font-normal text-blue-gray-500 text-center">
                      '{verseTranslation}'
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-4">
        <div className="container mx-auto">
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
