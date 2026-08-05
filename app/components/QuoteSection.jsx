import React from 'react'
import Text from './Text'

const QuoteSection = () => {
    return (
        <section className="mt-32 mb-32 text-center  mx-auto">
            <Text type="heroLabel" align='center'
            >
                Quote of the week
            </Text>

            <Text
                type="cardTitle"
mt={4}
                align='center'
            >
                “You do not have to be finished to be worth listening to. Tell me about the middle.”
            </Text>

            <Text
                type="bodyLarge"
align='center'
                mt={4}

            >
                From <em>Letter to a Friend</em> · {new Date().getFullYear()}
            </Text>
        </section >
    )
}

export default QuoteSection
