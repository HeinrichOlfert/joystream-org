import React from 'react';

import ArrowLink from '../../ArrowLink';

import MEXC from '../../../assets/images/token/mexc-logo.webp';

import './style.scss';

const ExchangeSection = ({ exchangeIcon, exchangeName, exchangeDescription, exchangeLink, t }) => {
  return (
    <div className="TokenPage__exchanges__item">
      <div className="TokenPage__exchanges__item__image-wrapper">
        <img src={exchangeIcon} className="TokenPage__exchanges__item__image" alt="" />
      </div>
      <p className="TokenPage__exchanges__item__name">{exchangeName}</p>
      <p className="TokenPage__exchanges__item__description">{exchangeDescription}</p>
      <ArrowLink href={exchangeLink} className="TokenPage__exchanges__item__link" text={t('token.exchanges.visit')} />
    </div>
  );
};

const Exchanges = ({ t }) => {
  return (
    <section className="TokenPage__exchanges-wrapper">
      <div className="TokenPage__exchanges">
        <header className="TokenPage__exchanges__header">
          <span className="TokenPage__exchanges__header__section-title">{t('token.exchanges.sectionTitle')}</span>
          <h2 className="TokenPage__exchanges__header__title">{t('token.exchanges.title')}</h2>
          <p className="TokenPage__exchanges__header__subtitle">{t('token.exchanges.subtitle')}</p>
        </header>

        <div className="TokenPage__exchanges__items">
          <ExchangeSection
            exchangeIcon={MEXC}
            exchangeName={t('token.exchanges.mexc.name')}
            exchangeDescription={t('token.exchanges.mexc.description')}
            exchangeLink="https://www.mexc.com/"
            t={t}
          />
        </div>
      </div>
    </section>
  );
};

export default Exchanges;
