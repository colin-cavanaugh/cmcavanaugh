export const useRenderStatusColor = () => {
  const renderStatusColor = (status: string) => {
    switch (status) {
      case 'Interviewing':
        return 'rgb(246, 161, 82)'
      case 'Applied':
        return 'rgb(82, 109, 246)'
      case 'Offer':
        return 'rgb(82, 246, 104)'
      case 'Rejected':
        return 'rgb(246, 82, 82)'
      default:
        return 'rgb(65, 64, 64)'
    }
  }
  return renderStatusColor
}
