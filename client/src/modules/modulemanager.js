/**
 * BetterDiscord Module Manager
 * Copyright (c) 2015-present Jiiks/JsSucks - https://github.com/Jiiks / https://github.com/JsSucks
 * All rights reserved.
 * https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

/*Module Manager initializes all modules when everything is ready*/

import { Events } from 'modules';
import { ProfileBadges } from 'ui';

export default class {

    static get modules() {
        return [
            ProfileBadges
        ];
    }

    static initModules() {
        for (let module of this.modules) {
            try {
                if (module.init && module.init instanceof Function) module.init();
            } catch (err) {
                console.log(`Failed to initialize module: ${err}`);
            }
        }
    }

}
