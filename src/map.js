import {Feature, Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {OSM, Vector as VectorSource} from 'ol/source';
import { useGeographic } from 'ol/proj';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';

export const mapModule = (() => {
    useGeographic(); 


    const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: [0, 0],
          zoom: 2
        })
    });

    const addPoint = (lat, lon) => {
        const point = new Point([lat, lon]);

        const vLayer = new VectorLayer({
            source: new VectorSource({
              features: [new Feature(point)],
            }),
            style: {
              'circle-radius': 4,
              'circle-fill-color': 'red',
            },
        });

        map.addLayer(vLayer);
    }

    const centerMap = (lat, lon) => {
        const view = map.getView();
        view.setCenter([lat, lon]);
        //const point = new Point([lat, lon]);
        view.setZoom(3);
        addPoint(lat, lon);
    }

    return {centerMap}
})();


