import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const PUBLIC_CAMPAIGNS = gql`
  query publicCampaigns($limit: Int, $skip: Int, $sortField: String, $sortDirection: Int) {
    publicCampaigns(limit: $limit, skip: $skip, sortField: $sortField, sortDirection: $sortDirection) {
      campaigns {
        id
        title
      }
      totalCount
    }
  }
`;

const CampaignItem = ({ title }) => (
  <li>{title}</li>
);


const CampaignsList = ({ data }) => {
  return (
    <ul>
      {(data || []).map(item => {
        return <CampaignItem key={item.key} title={item.title}/>
      })}
    </ul>
  )
}

const AllCampaigns = (props) => {
  return (
    <Query query={PUBLIC_CAMPAIGNS} variables={{ limit: 40 }}>{({ data, loading, error }) => {
      if(loading) return <h1>Loading...</h1>
      else if(error) return <h1>{error.message}</h1>

      return <CampaignsList data={data.publicCampaigns.campaigns} />
    }}</Query>
  )
}

export default AllCampaigns;