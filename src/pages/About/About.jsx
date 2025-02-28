import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Tooltip } from "react-tooltip";
import Features from "../Landing/components/Features/Features";

const About = ({ openModal }) => {
  return (
    <>
      <Header />
      <div className="hero-image">
        <img src="/hero/optimised/3.jpg" alt="Hero" />
      </div>

      <main className="about-container">
        <h1>Details</h1>
        <p>
          Raster data management has always been tricky in the{" "}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Earth_observation"
          >
            Earth Observation (EO)
          </a>{" "}
          domain, with the maintenance, storage, access, and searching of a
          dynamic archive of multiple terabytes (or even petabytes) of satellite
          imagery often being incredibly expensive and time-consuming.
          Organisations often need a better approach to manage and access their
          raster satellite data resources within their organisation.
        </p>

        <section>
          <h2>The Advent of STAC</h2>
          <p>
            The{" "}
            <a target="_blank" href="https://stacspec.org/">
              STAC (SpatioTemporal Asset Catalog)
            </a>{" "}
            specification is one of the most important and exciting recent
            developments in the EO industry and it really does have the
            potential to make many aspects of working with EO data simpler,
            easier, and more cost-effective.
          </p>
          <p>
            STAC is an enabling standard that helps organisations streamline and
            improve internal raster data management and also provides consistent
            access to this data regardless of whether that data is satellite
            imagery, aerial photography, DTM/DEM data, Point Cloud data etc.
          </p>
          <p>
            STAC helps answer the question: “How can we enable both our GIS
            analysts and data scientists to create and curate a catalogue of
            useful raster data for their project work from both open data
            sources and/or commercial data providers.”
          </p>
        </section>

        <section>
          <h2>What We Created</h2>
          <p>
            We took advantage of the recently published STAC standard and its
            associated ecosystem of{" "}
            <a
              target="_blank"
              href="https://stacspec.org/en/about/tools-resources/"
            >
              STAC tools
            </a>{" "}
            to develop an intuitive and user-friendly STAC Portal with
            associated STAC API, hosted in the public cloud (
            <a target="_blank" href="https://azure.microsoft.com/">
              Microsoft Azure
            </a>
            ).
          </p>{" "}
          <p>
            This STAC-based SaaS service is designed to help users manage their
            imagery data archive but is fully extensible, enabling other add-on
            services to be seamlessly added over time e.g. derived data products
            (High quality Water Masks, Annual Geomedian, NDVI, Fractional Cover
            etc), catalogue services (
            <a target="_blank" href="https://www.ogc.org/standard/cat/">
              OGC CSW
            </a>
            ), W*S services (
            <a href="https://www.ogc.org/standard/wms/" target="_blank">
              OGC WMS
            </a>
            ,{" "}
            <a href="https://www.ogc.org/standard/wmts/" target="_blank">
              WMTS
            </a>
            ,{" "}
            <a href="https://www.ogc.org/standard/wfs/" target="_blank">
              WFS
            </a>
            ,{" "}
            <a href="https://www.ogc.org/standard/wcs/" target="_blank">
              WCS
            </a>
            ,{" "}
            <a href="https://www.ogc.org/standard/wps/" target="_blank">
              WPS
            </a>
            ), bulk data upload functionality,
            <a target="_blank" href="https://jupyter.org/hub">
              {" "}
              Jupyter Hub
            </a>{" "}
            integration, analytical workflow management/execution services, AI
            services etc.
          </p>
        </section>

        <section>
          <h2>How Does It Work?</h2>
          <p>
            Users with appropriate privileges can create, update or delete
            imagery Collections from their organisation’s STAC Catalog and then
            upload their organisation’s imagery into these Collections or add
            publicly-available imagery from online services with STAC API’s e.g.{" "}
            <a target="_blank" href="https://planetarycomputer.microsoft.com/">
              Microsoft Planetary Computer
            </a>
            .
          </p>
          <p>
            Once Collections are created, users can then search/discover, view
            and download satellite data resources across these Collections using
            a user-friendly Explorer or the STAC Browser application. Users
            needing programmatic access can use the comprehensive STAC API for
            data processing, machine learning, etc.
          </p>
          <p>
            Imagery data products supported currently include satellite data
            (Landsat, Sentinel-1, Sentinel-2, Maxar, Planet), derived data
            products (e.g. those on Microsoft Planetary Computer), aerial
            photography, and height data (DTM/DSM data and Point Clouds). Other
            imagery data products can also be easily supported using custom
            parsers.
          </p>
        </section>

        <section>
          <h2>What Do We Offer?</h2>
          <p>
            The STAC Portal and API can be delivered as a fully managed (SaaS)
            service, hosted in our Microsoft Azure environment, with Spatial
            Days staff providing support and maintenance.
          </p>
          <p>
            Alternatively, the STAC Portal and API can be hosted in the user’s
            Microsoft Azure environment, with support from Spatial Days staff.
          </p>
          <button className="about__button" onClick={openModal}>
            Try it out
          </button>
          <Tooltip anchorSelect=".about__button" place="top" type="dark">
            Start a conversation
          </Tooltip>
        </section>
      </main>

      <Features />

      <Footer />
    </>
  );
};

export default About;
