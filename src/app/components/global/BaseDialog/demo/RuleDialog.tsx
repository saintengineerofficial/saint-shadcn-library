import { useTranslations } from 'next-intl'

import ActDecorateContainer from './ActDecorateContainer'
import BackgroundSection from '../../BackgroundSection'
import Spacing from '../../Spacing'

const RuleDialogContent = () => {

  return (
    <ActDecorateContainer containerType="Rules">
      <Spacing h='h-[100px]' />
      <p className="text-white">
        Life is short, so we have to make it count. Life is short, so we have to make it count. Life is short, so we
        have to make it count.
        Life is short, so we have to make it count. Life is short, so we have to make it count. Life is short, so we
        have to make it count.
        Life is short, so we have to make it count. Life is short, so we have to make it count. Life is short, so we
        have to make it count.
      </p>
    </ActDecorateContainer>
  )
}


export { RuleDialogContent }

