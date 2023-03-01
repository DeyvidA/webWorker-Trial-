import React, { FC, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import {
  FAQ_PATH,
  HOME_PATH,
  PRIVACY_POLICY_PATH,
  REGULATION_PATH,
  TERMS_OF_USE_PATH,
} from "./constants";
import { HomePage } from "./pages/Home";
import { WhitelistAddressModule } from "./modules/WhitelistAddress";
import { BankAccountModule } from "./modules/BankAccount";
import { LoginModule } from "./modules/Login";
import { RegisterModule } from "./modules/Register";
import { AlertModule } from "./modules/Alert";

const FAQPage = lazy(
  () =>
    import(
      /* webpackChunkName: "faq" */
      /* webpackMode: "lazy" */
      "./pages/FAQ"
    )
);

const PrivacyPolicyPage = lazy(
  () =>
    import(
      /* webpackChunkName: "privacy-policy" */
      /* webpackMode: "lazy" */
      "./pages/PrivacyPolicy"
    )
);

const RegulationPage = lazy(
  () =>
    import(
      /* webpackChunkName: "regulation" */
      /* webpackMode: "lazy" */
      "./pages/Regulation"
    )
);

const TermsOfUsePage = lazy(
  () =>
    import(
      /* webpackChunkName: "terms-of-use" */
      /* webpackMode: "lazy" */
      "./pages/TermsOfUse"
    )
);

const ScrollToTop = withRouter(({ history }) => {
  useEffect(() => {
    return history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return null;
});

export const Routes: FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Route path={HOME_PATH} exact component={HomePage} />
    <Route path={HOME_PATH} component={LoginModule} />
    <Route path={HOME_PATH} component={RegisterModule} />
    <Route path={HOME_PATH} component={BankAccountModule} />
    <Route path={HOME_PATH} component={WhitelistAddressModule} />
    <Route path={HOME_PATH} component={AlertModule} />
    {/* <Route path={WORKER_FETCH_PATH} component={FetchWorker} /> */}
    <Suspense fallback={<div />}>
      <Route path={FAQ_PATH} component={FAQPage} />
      <Route path={PRIVACY_POLICY_PATH} component={PrivacyPolicyPage} />
      <Route path={REGULATION_PATH} component={RegulationPage} />
      <Route path={TERMS_OF_USE_PATH} component={TermsOfUsePage} />
    </Suspense>
  </BrowserRouter>
);
