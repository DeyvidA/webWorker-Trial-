import React, { ComponentType, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { BLOCKSTREAM_ASSET_URL, ProductType, SECOND_ASSET_URL } from '../../constants';
import { Asset, TableProps } from './typedef';
import { BlockStreamApi, ConverterService } from '../../services';
import { TableRow } from './components/table-row';
import { LoadingTableRow } from './components/loading-table-row';

const TABLE_COLUMNS = 6;
const DEFAULT_PRODUCT_TYPE = 'Deliver';

export const withAssetsTableDomain = (Component: ComponentType<TableProps>) => () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const firstAssetData = useQuery('firstAsset', BlockStreamApi.fetchDefaultAsset);
  const secondAssetData = useQuery('secondAsset', BlockStreamApi.fetchSecondAsset)

  const isLoading = firstAssetData.isLoading || secondAssetData.isLoading

  useEffect(() => {
    if (!isLoading && firstAssetData.data && secondAssetData.data) {
      setAssets([
        {
          productName: firstAssetData.data.ticker || ProductType.EURX,
          productType: DEFAULT_PRODUCT_TYPE,
          issuer: firstAssetData.data.entity?.domain || 'pegx.io',
          issuedAmount: ConverterService.convertAmount(
            firstAssetData.data.chain_stats.issued_amount.toString(),
            firstAssetData.data.precision
          ),
          burnedAmount: firstAssetData.data.chain_stats.burned_amount,
          link: BLOCKSTREAM_ASSET_URL
        },
        {
          productName: secondAssetData?.data?.ticker || ProductType.USDT,
          productType: DEFAULT_PRODUCT_TYPE,
          issuer: secondAssetData.data.entity?.domain || 'tether.io',
          issuedAmount: ConverterService.convertAmount(
            secondAssetData.data.chain_stats.issued_amount.toString(),
            secondAssetData.data.precision
          ),
          burnedAmount: secondAssetData.data.chain_stats.burned_amount,
          link: SECOND_ASSET_URL
        }
      ]);
    }
  }, [isLoading, firstAssetData.data, secondAssetData.data]);

  return (
    <Component>
      {
        (isLoading || !assets.length)
          ? <LoadingTableRow length={TABLE_COLUMNS} />
          : assets.map(asset => <TableRow asset={asset} key={asset.issuer} />)
      }
    </Component>
  );
};
