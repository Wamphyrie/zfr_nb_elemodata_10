sap.ui.define([
		"phoenix/zfr_nb_elemodata_10/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("phoenix.zfr_nb_elemodata_10.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);