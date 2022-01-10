import React from "react";
import Gallery from '../Gallery';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { imageList, videoList } from "../Gallery/itemData";
import "./TabPanels.css";
const TabPanels = React.memo((props) => {

    const tabHeaderITemplateImages = (options) => {

        return (
              <Button  className={options.className} badge={imageList.length}  badgeClassName="p-badge-light tabBadge" onClick={options.onClick} >
                {options.titleElement}
            </Button>
        );
    };
    const tabHeaderITemplateViedos = (options) => {

        return (
            <Button  className={options.className} badge={videoList.length}  badgeClassName="p-badge-light tabBadge" onClick={options.onClick} >
                {options.titleElement}
            </Button>
        );
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row  g-0">
                    <TabView>
                        <TabPanel header="Images" headerTemplate={tabHeaderITemplateImages} headerClassName="p-d-flex p-ai-center"  >
                            <Gallery type="images" />
                        </TabPanel>
                        <TabPanel header="Videos"  headerTemplate={tabHeaderITemplateViedos} headerClassName="p-d-flex p-ai-center" >
                            <Gallery type="videos" />
                        </TabPanel>
                    </TabView>
                </div>
            </div>

        </React.Fragment>
    );
});
export default TabPanels;