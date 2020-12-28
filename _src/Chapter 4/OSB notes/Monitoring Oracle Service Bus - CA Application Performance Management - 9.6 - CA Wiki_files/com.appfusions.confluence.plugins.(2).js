;try {
/* module-key = 'com.appfusions.confluence.plugins.lingotek.lingotek-translation:lingotekDocumentOperationsWebResource', location = 'includes/document-operations/soy/document-operations.soy' */
// This file was automatically generated from document-operations.soy.
// Please don't edit this file by hand.

if (typeof AppFusions == 'undefined') { var AppFusions = {}; }
if (typeof AppFusions.Lingotek == 'undefined') { AppFusions.Lingotek = {}; }
if (typeof AppFusions.Lingotek.SpaceTranslation == 'undefined') { AppFusions.Lingotek.SpaceTranslation = {}; }


AppFusions.Lingotek.SpaceTranslation.createProjectVerifyDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message hint"><p class="title"><span class="aui-icon icon-hint "></span><strong>Contacting Lingotek</strong></p><p>We\'re just checking Lingotek for any existing project with this name</p></div>');
  return opt_sb ? '' : output.toString();
};


AppFusions.Lingotek.SpaceTranslation.createDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="', soy.$$escapeHtml(opt_data.actionUrl), '" method="post" id="start-translation-form" class="aui unsectioned">');
  var pageIdList8 = opt_data.pageIds;
  var pageIdListLen8 = pageIdList8.length;
  for (var pageIdIndex8 = 0; pageIdIndex8 < pageIdListLen8; pageIdIndex8++) {
    var pageIdData8 = pageIdList8[pageIdIndex8];
    output.append('<input type="hidden" name="pageIds" value="', soy.$$escapeHtml(pageIdData8), '"/>');
  }
  output.append('<input type="hidden" name="downloadOnly" value="', soy.$$escapeHtml(opt_data.downloadOnly), '"/>', (! opt_data.downloadOnly) ? '<p>' + soy.$$escapeHtml("Select the set of languages that you want to translate into") + '</p>' : '<p>' + soy.$$escapeHtml("Select the set of languages that you want to refresh translation with") + '</p>', '<fieldset class="group">');
  var languageList26 = opt_data.targetLanguages;
  var languageListLen26 = languageList26.length;
  for (var languageIndex26 = 0; languageIndex26 < languageListLen26; languageIndex26++) {
    var languageData26 = languageList26[languageIndex26];
    output.append('<div class="checkbox"><input class="checkbox" type="checkbox" name="targetLanguages" id="', soy.$$escapeHtml(languageData26.code), '" value="', soy.$$escapeHtml(languageData26.code), '"  checked><img class="flag ', soy.$$escapeHtml(languageData26.code), '" width="16" height="11" width="16" height="11" src="', soy.$$escapeHtml(opt_data.baseUrl), '/download/resources/com.appfusions.confluence.plugins.lingotek.lingotek-translation/images/flags/', soy.$$escapeHtml(languageData26.flagUrl), '.png"> &nbsp;<label for="', soy.$$escapeHtml(languageData26.code), '">', soy.$$escapeHtml(languageData26.description), '</label></div>');
  }
  output.append('</fieldset>', (opt_data.isSpaceTranslation && ! opt_data.downloadOnly) ? '<input class="hidden" type="hidden" name="spaceTranslationInitiated" id="spaceTranslationInitiated" value="true"><p>' + soy.$$escapeHtml("You may provide a version number to differentiate this set of translations from previous runs. Translations that result in the same version will safely override previous ran translations.") + '</p><fieldset class="group translateTitle"><div class="checkbox"><input class="checkbox" type="checkbox" name="translateTitle" id="translateTitle" checked><label for="translateTitle">Translate page titles</label></div></fieldset><fieldset class="group addVersion"><div class="checkbox"><input class="checkbox" type="checkbox" name="addVersion" id="addVersion"><label for="addVersion">Add Version suffix to translated space name</label></div></fieldset><div class="field-group translationVersion" style="display: none"><label for="translationVersion">Translation Version<span class="aui-icon icon-required"></span><span class="content"> required</span></label><input class="text short-field" type="text" id="translationVersion" name="translationVersion" title="translation version"></div>' : '', '</form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.appfusions.confluence.plugins.lingotek.lingotek-translation:lingotekDocumentOperationsWebResource', location = 'includes/document-operations/js/document-operations.js' */
if (typeof Lingotek == "undefined" || !Lingotek) {
    var Lingotek = {};
}

/* Function hack here to get URL params since sometimes spaceKey isn't defined */
Lingotek.getSpaceKey = function() {
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    if (AJS.params.spaceKey !== undefined) {
        return AJS.params.spaceKey;
    }
    return getUrlVars()["key"];
};

Lingotek.StartTranslationPopupController = function(isSpaceTranslation) {
    var self = this;
    self.isSpaceTranslation = isSpaceTranslation;

    var addVersionSelectChanged = function(event) {
        var checked = AJS.$(this).is (':checked');
        checked ? AJS.$("div.translationVersion").show() : AJS.$("div.translationVersion").hide();
    };

    var openStartTranslationPopup = function(targetLanguages, actionUrl, pageIds, downloadOnly) {
        if (pageIds === undefined || pageIds === null) {
            pageIds = [];
        }
        var template = AppFusions.Lingotek.SpaceTranslation.createDialog({ targetLanguages: targetLanguages, actionUrl: actionUrl, baseUrl: AJS.params.baseUrl, isSpaceTranslation: self.isSpaceTranslation, pageIds: pageIds, downloadOnly: downloadOnly });

        var height = 330 + targetLanguages.length * 20;
        height = height > AJS.$(window).height() - 40 ? AJS.$(window).height() - 40 : height;

        var dialog = new AJS.Dialog({width: 500, height: height, id:"create-space-translation-dialog", closeOnOutsideClick: true});
        dialog.addHeader(downloadOnly ? "Refresh translations" : "Start a translation");

        dialog.addPanel("Panel 1", template, "panel-body");

        dialog.addButton("Start", function (dialog) {
            //TODO: Fix form validation. Having issues with submit handler not submitting
            AJS.$("#start-translation-form").submit();
            dialog.hide();
        });
        dialog.addButton("Cancel", function (dialog) {
            dialog.hide();
        });


        dialog.gotoPage(0);
        dialog.gotoPanel(0);
        dialog.show();
    };

    var openPopup = function(actionUrl, pageIds, downloadOnly) {
        AJS.$(".addVersion input").live("click", addVersionSelectChanged);

        AJS.log("Opening create space translations dialog");

        AJS.$.ajax({
            url: Confluence.getContextPath() + "/rest/appfusions/lingotek/latest/translations/space/" + Lingotek.getSpaceKey() + "/targetLanguages",
            type: "get",
            dataType: "json",
            success: function(data) {
                openStartTranslationPopup(data, actionUrl, pageIds, downloadOnly);
            },
            error: function(xhr, text, error) {
                AJS.log("Error retrieving target languages: " + text);
                AJS.log(error);
                alert("Error retrieving target languages for starting translation popup");
            }
        });
    };

    return {
        openPopup: openPopup,
    }
};

Lingotek.Phase = function(parentViewModel) {
    var self = this;

    self.id = ko.observable();
    self.name = ko.observable();
    self.percentComplete = ko.observable();
    self.markedComplete = ko.observable();
    self.isReviewPhase = ko.observable(true);
    self.phaseStatus = ko.computed(function() {
        return self.markedComplete() ? "\u2713" : "( " + self.percentComplete() + "% )";
    }, self);
    self.markAsComplete = function() {
        AJS.log("Marking as complete, phaseID: " + self.id());
        parentViewModel.loading(true);
        AJS.$.ajax({
            url: Confluence.getContextPath() + "/rest/appfusions/lingotek/latest/api/markPhaseComplete/" + self.id(),
            type: "post",
            dataType: "json",
            success: function(data) {
                Lingotek.DocumentOperationsController.getDocumentProgress();
            },
            error: function(xhr, text, error) {
                parentViewModel.loading(false);
                AJS.log("Error retrieving document progress: " + text);
                AJS.log(error);
            }
        });
    };
};

Lingotek.DocumentOperationViewModel = function() {
    var self = this;

    self.ERROR_MESSAGE = "Error! Please check your Lingotek username or permissions";

    self.errorMessage = ko.observable("");
    self.hasErrorMessage = ko.computed(function() {
        return self.errorMessage() !== "";
    });
    self.phases = ko.observableArray();
    self.launchWorkbenchClicked = function(model) {
        self.errorMessage("");
        self.loading(true);
        Lingotek.LaunchWorkbenchController.launchWorkbench(model.id(), function() {
            Lingotek.DocumentOperationsController.getDocumentProgress();
        }, self.handleError);
    };
    self.refreshClicked = function() {
        self.errorMessage("");
        Lingotek.LaunchWorkbenchController.checkLingotekForLaterVersionOfPage(true, function() {
            Lingotek.DocumentOperationsController.getDocumentProgress();
        }, self.handleError);
    };
    self.translateClicked = function(e) {
        var actionUrl = Confluence.getContextPath() + "/pages/plugins/lingotek/singlePageTranslate.action?pageId=" + AJS.params.pageId;
        new Lingotek.StartTranslationPopupController(false).openPopup(actionUrl);
    };
    self.loading = ko.observable(true);
    self.handleError = function(errorMessage) {
        AJS.log("Handle Error: " + errorMessage);
        if (errorMessage === undefined) {
            errorMessage = self.ERROR_MESSAGE;
        }
        self.errorMessage(errorMessage);
        self.loading(true);
    };
};

Lingotek.DocumentOperationsController = function() {

    var viewModel = new Lingotek.DocumentOperationViewModel();

    var getDocumentProgress = function() {
        viewModel.errorMessage("");
        viewModel.loading(true);
        AJS.$.ajax({
            url: Confluence.getContextPath() + "/rest/appfusions/lingotek/latest/api/documentProgressForPage/" + AJS.params.pageId,
            type: "get",
            dataType: "json",
            success: function(data) {
                viewModel.loading(false);
                if (data && data.translationTargets && data.translationTargets.length && data.translationTargets[0].phases) {
                    viewModel.phases.removeAll();
                    _.each(data.translationTargets[0].phases, function(phaseData) {
                        var phaseVM = new Lingotek.Phase(viewModel);
                        //FIXME: work out the best way to use mapping here again :(
                        phaseVM.id(phaseData.id);
                        phaseVM.name(phaseData.name);
                        phaseVM.markedComplete(phaseData.markedComplete);
                        phaseVM.percentComplete(phaseData.percentComplete);
                        phaseVM.isReviewPhase(phaseData.type === 'REVIEW' || phaseData.type === 'TRANSLATION');
                        viewModel.phases.push(phaseVM);
                    });
                    jQueryBS('.dropdown-toggle').dropdown();
                }
            },
            error: function(xhr, text, error) {
                if (xhr.responseText !== "") {
                    AJS.log("Error retrieving document progress: " + xhr.responseText);
                    viewModel.errorMessage(viewModel.ERROR_MESSAGE);
                }
            }
        });
    };

    var onTranslatedPage = function() {
        return AJS.$(".phases", AJS.$(".lingotek-operations-container")[0]).length > 0;
    };

    var onLingotekSourceOrTranslatedPage = function() {
        return AJS.$(".lingotek-operations-container").length > 0;
    };

    return {
        init: function() {
            ko.applyBindings(viewModel);
            jQueryBS('.dropdown-toggle').dropdown();

            if (onTranslatedPage()) {
                getDocumentProgress();
            }
        },
        getDocumentProgress: getDocumentProgress,
        onLingotekSourceOrTranslatedPage: onLingotekSourceOrTranslatedPage
    }
}();

AJS.toInit(function () {
    if (Lingotek.DocumentOperationsController.onLingotekSourceOrTranslatedPage()) {
        Lingotek.DocumentOperationsController.init();
    }
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
